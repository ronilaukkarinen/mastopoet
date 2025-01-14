import { Post } from "./components/PostItem";

export const maxWidth = 400; // Max width (of gradient) after message width
export const defaultWidth = 200;

export const maxHeight = 200; // Max height (of gradient) after message height
export const defaultHeight = 100;

export const themes = [
  "bird-ui",
  "bird-ui-light",
  "mastodon",
  "mastodon-light",
] as const;

export type Theme = (typeof themes)[number];
export type InteractionsPreference =
  | "normal"
  | "normal no-replies"
  | "feed"
  | "hidden";

export interface Options {
  theme: Theme;
  interactions: InteractionsPreference;
  background: string;
}

export const welcomePost: Post = {
  username: "@raikas@mementomori.social",
  displayName: "Roni Äikäs ⚛️",
  attachments: [],
  avatarUrl:
    "https://media.mementomori.social/accounts/avatars/110/666/945/922/059/535/original/0cbd49bb8be6d45d.jpg",
  boosts: 0,
  comments: 0,
  favourites: 0,
  date: new Date(1690503611282),
  content:
    '<p>Hello and welcome to <a href="https://mementomori.social/tags/Mastopoet" class="mention hashtag" rel="tag">#<span>Mastopoet</span></a> !<br />Paste a Mastodon Toot URL in the field above and play with the options to create perfect screenshots!</p><p>Source code (licensed under MIT) -&gt; <a href="https://github.com/raikasdev/mastopoet" target="_blank" rel="nofollow noopener noreferrer" translate="no"><span class="invisible">https://</span><span class="">github.com/raikasdev/mastopoet</span><span class="invisible"></span></a><br />Reach out to me -&gt; <a href="https://mementomori.social/@raikas" target="_blank" rel="nofollow noopener noreferrer" translate="no"><span class="invisible">https://</span><span class="">mementomori.social/@raikas</span><span class="invisible"></span></a></p>',
};
