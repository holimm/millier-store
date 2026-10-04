import { ResponseBEType } from "@/models/common";
import { ContactFormType } from "@/models/contactModel";
import { getMockDb, updateMockDb } from "@/mocks/db";
import { mockDelay } from "@/mocks/delay";

const contactService = {
  async createContactNode(
    values: ContactFormType
  ): Promise<ResponseBEType<string>> {
    await mockDelay();
    const existing = getMockDb().contacts.filter(
      (item) => item.email === values.email
    );
    if (existing.length >= 2) {
      return {
        status: "error",
        data: "You can only submit the contact form twice per email",
      };
    }

    updateMockDb((db) => {
      db.contacts.push({
        ...values,
        date: new Date().toISOString(),
      });
    });

    return {
      status: "success",
      data: "Thanks for contacting Millier. We will get back to you soon.",
    };
  },
};

export default contactService;
