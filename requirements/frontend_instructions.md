# Project Overview
Use this guide to build a web app where users can give a text prompt to generate ghibli style images using a model
hosted on Replicate.

# Feature Requirements
- We will use NextJS, Shadcn, Lucid,  Supabase and Clerk.
- Create a form where users can submit a text prompt.
- The form will have a button that will trigger the image generation from replicate model to generate an image.
- The generated images will be displayed on the screen.
- Create a nice UI and animation when the image is being generated.
- Display all the images ever generated in a grid.
- When a user hovers over an image, display icons to like and download the image.

- 


# Relevant Docs
- How to use replicate image model

Set the REPLICATE_API_TOKEN environment variable

export REPLICATE_API_TOKEN=r8_4zK**********************************

Learn more about authentication

Install Replicate’s Node.js client library

npm install replicate

Learn more about setup

Run aleksa-codes/flux-ghibsky-illustration using Replicate’s API. Check out the model's schema for an overview of inputs and outputs.

import Replicate from "replicate";
const replicate = new Replicate();

const input = {
    prompt: "GHIBSKY style, a cat on a windowsill gazing out at a starry night sky and distant city lights",
    aspect_ratio: "9:16",
    output_format: "jpg",
    output_quality: 100
};

const output = await replicate.run("aleksa-codes/flux-ghibsky-illustration:a9f94946fa0377091ac0bcfe61b0d62ad9a85224e4b421b677d4747914b908c0", { input });
console.log(output)



# Current File Structure

.
├── .next
├── app
│   ├── fonts
│   │   ├── GeistMonoVF.woff2
│   │   └── GeistVF.woff2
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── button.tsx
│   ├── card.tsx
│   └── input.tsx
├── lib
│   └── utils.ts
├── node_modules
├── requirements
│   └── frontend_instructions.md
├── .eslintrc.json
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
└── package.json

# Rules
- All new components should be in the /components folder and named like example_component.tsx unless otherwise specified.
- All new pages should be in the /app folder and named like example_page.tsx unless otherwise specified.