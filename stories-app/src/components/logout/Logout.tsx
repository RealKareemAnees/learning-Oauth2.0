"use client";

export default function LogoutButton() {
  async function handleLogout() {
    await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload(); // Refresh to update state
  }

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
}
