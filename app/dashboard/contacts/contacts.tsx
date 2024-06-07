import { getXataClient } from "@/src/xata";
import React from "react";

export default async function Contact() {
  const xataClient = getXataClient();
  const contact = await xataClient.db.userContacts.getMany();

  return (
    <div className="min-h-full ">
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <ul>
            {contact.map((userContact) => (
              <li key={userContact.id}>{userContact.cName}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
