// src/app/actions/waitlist.ts
("use server");

type WaitlistFormData = {
  fullName: string;
  email: string;
};

export async function addToWaitlist(formData: FormData) {
  const data = {
    fullName: formData.get("full-name"),
    email: formData.get("email"),
  };

  try {
    // Here you could:
    // 1. Save to a database
    // 2. Send to an email service
    // 3. Add to a mailing list

    // For now, let's just log and return success
    console.log("Waitlist submission:", data);

    return { success: true };
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return { success: false, error: "Failed to join waitlist" };
  }
}
