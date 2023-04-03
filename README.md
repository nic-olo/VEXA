# VEXA

## What is this repo about?

This repo consists of our simple prototype for the National Medtech Foundation 'Hackathon', we worked on a project in the telemedicine stream.
Our idea was to create ```VEXA (Virtual Examinations and Assessments)```, a "if this then that" preconsulting tool that provides simple instructions for patients to perform simple checks to hopefully aid and speed up the telemedicine consult.

App is deployed here: https://dia-ndwbv5pji-nic-olo.vercel.app/

<img width="945" alt="image" src="https://user-images.githubusercontent.com/56083944/228997758-dd4f061c-75bb-406d-99f2-da6f51547d02.png">
<img width="942" alt="image" src="https://user-images.githubusercontent.com/56083944/228998509-f2a0389a-b765-474c-bfc6-328b6700277b.png">
<img width="948" alt="image" src="https://user-images.githubusercontent.com/56083944/228998714-e5f1ccaf-3570-406e-863f-596ae3f37253.png">


Note: Since this is a 1 day hack, this is just a preprogrammed chat flow

## Motivation

With the current telemedicine setup, physical checkups are mostly just ignored during telemedicine consultations, so they would be ignored as part of the process as a whole.
We had found some research evidence that simple physical checks can be done by patients or with their carers to help with the diagnosis.

For example:
- Pinching your fingertips and seeing how long it takes to turn from white to pink
- Pulling down your eyebags to see if there is yellowing
- etc

So we came up with an idea to introduce videos on how to perform those simple checks in a chat based approach.

The App flow
<img width="780" alt="image" src="https://user-images.githubusercontent.com/56083944/228996346-853ebf8a-c46f-439f-a35d-b73fb6ed33c1.png">

## Technical details

### What this app really is?

Instead of building out our hack idea using typeforms, we decided to use our programming skills to build out a simple chat bot framework for demoing preprogrammed flows, totally unnecessary but the team did it for fun.

We built out a system with
- A place to store our questions
- A place to store the cards (like a yes/no card, video card, multi choice card, info card) we support for the bot to use
- And a simple system to add what you want the bot to say and with what card

Here, you can see it being used for a medtech idea demo: https://dia-ndwbv5pji-nic-olo.vercel.app/

### Tech stack

Purely frontend: 
- React 18
- TailwindCSS + DaisyUI
