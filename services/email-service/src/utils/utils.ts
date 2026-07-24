export const getUserInfo = async (event: any) => {
  try {
    // If you pass the email and name in the event, just return them
    return {
      email: event.email,
      name: event.userName || "User" 
    };
  } catch (error) {
    console.error("Error fetching user info:", error);
    return null;
  }
};

// Format date for email
export const formatDate = (date?: Date): string => {
  if (!date) return "No due date"
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
