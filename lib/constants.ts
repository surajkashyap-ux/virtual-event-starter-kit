/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://snydernation.com';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'snusunited';
export const BRAND_NAME = 'SN';
export const SITE_NAME_MULTILINE = ['Snyder', 'Nation'];
export const SITE_NAME = 'Snyder Nation';
export const META_DESCRIPTION =
  'This is a fan-made website created by collaboration of designers, and developers for their mutual love towards the work of visionary director Mr. Zack Snyder.';
  export const META_DESCRIPTIONN =
  'This is a collection of essays, papers and are collected to show our love towards the work of visionary director Mr. Zack Snyder.';
export const SITE_DESCRIPTION =
  'An informative online fan community, free for everyone.';
export const DATE = 'March 18, 2021';
export const SHORT_DATE = '';
export const FULL_DATE = 'March 18th 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://snydernation.notion.site/snydernation/Code-of-Conduct-487d8952a761440bb50b0ad72c6e4093';
export const REPO = 'https://discord.gg/gj6rQukCdh';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
 
  {
    name: 'Expo',
    route: '/expo'
  },
  {
    name: 'Info',
    route: '/info'
  },
  {
    name: 'Watch Parties',
    route: '/stage/mos'
  },
  {
    name: 'Code',
    route: 'https://snydernation.notion.site/snydernation/Code-of-Conduct-487d8952a761440bb50b0ad72c6e4093'
  },
  {
    name: 'Contact Us',
    route: 'https://notionforms.io/forms/contact-snyder-nation'
  }
];

export type TicketGenerationState = 'default' | 'loading';
