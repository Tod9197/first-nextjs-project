import React from "react";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>DashBoard</h2>
      {children}
    </section>
  );
}
