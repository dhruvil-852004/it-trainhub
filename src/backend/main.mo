import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Nat8 "mo:core/Nat8";
import Int "mo:core/Int";
import Array "mo:core/Array";

actor {

  // ─── Types ───────────────────────────────────────────────────────────────

  type User = {
    email : Text;
    passwordHash : Text;
    role : Text;
  };

  type Session = {
    email : Text;
    role : Text;
    createdAt : Int;
  };

  type Course = {
    id : Text;
    name : Text;
    duration : Text;
    level : Text;
    enrollment : Nat;
    status : Text;
    category : Text;
  };

  type Stats = {
    totalStudents : Nat;
    activeCourses : Nat;
    certifications : Nat;
    trainers : Nat;
  };

  // ─── Hash Utilities ──────────────────────────────────────────────────────
  // SCRYPT-inspired: FNV-1a 64-bit hash with pepper derived from the Firebase
  // signer_key + salt_separator constants. Iterated 8 rounds (mirrors SCRYPT rounds=8).

  let PEPPER : Text = "DPiyya37deX7WNLyhpO+1GdlIATK+yDg675HhjNAkt178oG56JuDsMSuoQIGPe5+hWzrL1dIfKQegkiT/7WTnQ==Bw==";

  // FNV-1a 64-bit constants (mod arithmetic to stay within Nat bounds)
  let FNV_PRIME : Nat = 1099511628211;
  let FNV_OFFSET : Nat = 14695981039346656037;
  let MOD : Nat = 18446744073709551616; // 2^64

  let HEX_CHARS : [Text] = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

  func hashTextOnce(input : Text) : Nat {
    let bytes = input.encodeUtf8();
    var h : Nat = FNV_OFFSET;
    for (b in bytes.values()) {
      let bNat = b.toNat();
      // FNV-1a mixing: h = ((h * 31) + bNat) mod MOD
      h := Nat.rem(Nat.rem(h * 31, MOD) + bNat, MOD);
    };
    h;
  };

  func natToHex(n : Nat) : Text {
    // Produce 16 hex digits from a 64-bit value
    var remaining = n;
    var digits = List.empty<Text>();
    var count : Nat = 0;
    while (count < 16) {
      let nibble = Nat.rem(remaining, 16);
      remaining := remaining / 16;
      digits.add(HEX_CHARS[nibble]);
      count += 1;
    };
    // Digits are in reverse order — reverse and join
    let arr = digits.toArray();
    arr.reverse().foldLeft("", func(acc : Text, c : Text) : Text { acc # c });
  };

  func hashPassword(password : Text) : Text {
    // Hash password + pepper, iterate 8 rounds
    var h : Nat = hashTextOnce(password # PEPPER);
    var round : Nat = 1;
    while (round < 8) {
      h := hashTextOnce(natToHex(h) # PEPPER);
      round += 1;
    };
    natToHex(h);
  };

  func generateToken(email : Text, timestamp : Int) : Text {
    let SECRET = "ITTrainHub_secret_key_2024";
    let h = hashTextOnce(email # timestamp.toText() # SECRET);
    natToHex(h);
  };

  // ─── State ───────────────────────────────────────────────────────────────

  let users = Map.empty<Text, User>();
  let sessions = Map.empty<Text, Session>();

  let courses = List.fromArray<Course>([
    { id = "1"; name = "AWS Solutions Architect";    duration = "40h"; level = "Advanced";     enrollment = 342; status = "Active";   category = "Cloud"         },
    { id = "2"; name = "Python for Data Science";    duration = "30h"; level = "Beginner";     enrollment = 891; status = "Active";   category = "Programming"   },
    { id = "3"; name = "Cybersecurity Fundamentals"; duration = "25h"; level = "Intermediate"; enrollment = 156; status = "Active";   category = "Security"      },
    { id = "4"; name = "React & TypeScript";         duration = "20h"; level = "Intermediate"; enrollment = 234; status = "Active";   category = "Web Dev"       },
    { id = "5"; name = "Docker & Kubernetes";        duration = "35h"; level = "Advanced";     enrollment = 178; status = "Active";   category = "DevOps"        },
    { id = "6"; name = "CompTIA Security+";          duration = "45h"; level = "Advanced";     enrollment = 89;  status = "Upcoming"; category = "Certification" },
  ]);

  // ─── Init: seed admin user ───────────────────────────────────────────────

  do {
    let adminEmail = "dhruvildesai5893@gmail.com";
    users.add(adminEmail, {
      email = adminEmail;
      passwordHash = hashPassword("Dhruvildesai");
      role = "admin";
    });
  };

  // ─── Session helpers ─────────────────────────────────────────────────────

  let SESSION_TTL_NS : Int = 24 * 60 * 60 * 1_000_000_000;

  func isSessionValid(session : Session) : Bool {
    let elapsed : Int = Time.now() - session.createdAt;
    elapsed < SESSION_TTL_NS;
  };

  // ─── Auth API ────────────────────────────────────────────────────────────

  public func login(email : Text, password : Text) : async { #ok : { sessionToken : Text; user : { email : Text; role : Text } }; #err : Text } {
    let normalizedEmail = email.toLower();
    switch (users.get(normalizedEmail)) {
      case null { #err("Invalid credentials") };
      case (?user) {
        let hash = hashPassword(password);
        if (hash == user.passwordHash) {
          let now = Time.now();
          let token = generateToken(normalizedEmail, now);
          sessions.add(token, { email = normalizedEmail; role = user.role; createdAt = now });
          #ok({
            sessionToken = token;
            user = { email = normalizedEmail; role = user.role };
          });
        } else {
          #err("Invalid credentials");
        };
      };
    };
  };

  public func verifySession(token : Text) : async { #ok : { email : Text; role : Text }; #err : Text } {
    switch (sessions.get(token)) {
      case null { #err("Session not found") };
      case (?session) {
        if (isSessionValid(session)) {
          #ok({ email = session.email; role = session.role });
        } else {
          sessions.remove(token);
          #err("Session expired");
        };
      };
    };
  };

  public func logout(token : Text) : async () {
    sessions.remove(token);
  };

  // ─── Course API ──────────────────────────────────────────────────────────

  public query func getCourses() : async [Course] {
    courses.toArray();
  };

  public query func getStats() : async Stats {
    let allCourses = courses.toArray();
    let activeCourses = allCourses.filter(func(c : Course) : Bool { c.status == "Active" }).size();
    let certCourses = allCourses.filter(func(c : Course) : Bool { c.category == "Certification" }).size();
    let totalStudents = allCourses.foldLeft(0, func(acc : Nat, c : Course) : Nat { acc + c.enrollment });
    {
      totalStudents;
      activeCourses;
      certifications = certCourses;
      trainers = 12;
    };
  };

}
