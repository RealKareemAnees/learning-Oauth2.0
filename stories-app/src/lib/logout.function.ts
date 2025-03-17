export async function handleLogout() {
  "use client";
  await fetch("/api/logout", { method: "POST" });
  alert("You have been logged out!");
  window.location.reload(); // Refresh to update state
}
