import bcrypt from "bcryptjs";

export async function saltAndHashPassword(password: string): Promise<string> {
  try {
    if (typeof password !== "string" || password.length < 8) {
      throw new Error("Password must be a string with at least 8 characters.");
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw new Error("Password hashing failed");
  }
}

export async function comparePasswords(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  try {
    if (typeof plainPassword !== "string" || plainPassword.trim() === "") {
      throw new Error("Plain password must be a non-empty string.");
    }
    if (typeof hashedPassword !== "string" || hashedPassword.trim() === "") {
      throw new Error("Hashed password must be a non-empty string.");
    }
    const match = await bcrypt.compare(plainPassword, hashedPassword);
    return match;
  } catch (error) {
    console.error("Error comparing passwords:", error);
    return false;
  }
}
