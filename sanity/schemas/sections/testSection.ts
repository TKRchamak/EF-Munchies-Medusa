import {defineField} from "sanity";

export default defineField({
  fields: [
    {
      name: "text",
      title: "Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
  name: "section.testSection",
  preview: {
    prepare: ({text}) => ({
      subtitle: "test section",
      title: text,
    }),
    select: {
      text: "text",
    },
  },
  title: "test section",
  type: "object",
});
