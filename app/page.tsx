import BlockProfilePic from "./components/BlockProfilePic";

const testCopy = [
  "Wanna be movie director with an Advertising Degree.",
  "Movie production, video recording/editing, 2d/3d animation background.",
  "",
  "At 27 years old in 2022 before chatgpt came out I pivoted into tech.",
  "Dove deep into computer science and the tech industry.",
  " ",
  "I now like to consider myself a software engineer.",
  "I love the industry.",
];

export default function Home() {
  return (
    <div className="relative w-full bg-black">
      {/* Fixed profile block that sits behind the scrolling content */}
      <div className="fixed inset-x-0 top-0 z-0">
        <BlockProfilePic />
      </div>

      {/* Invisible copy that reserves the profile block's height in the page flow */}
      <div aria-hidden className="invisible">
        <BlockProfilePic />
      </div>

      {/* Scrolling content that slides over the profile block */}
      <main className="relative z-10 min-h-[160vh] bg-black px-6 pt-24 pb-40 text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-300">
            <div>
              <p>Wanna be movie director with an Advertising Degree.</p>
              <p>Movie production, video recording/editing, 2d/3d animation background.</p>
            </div>

            <div>
              <p>At 27 years old in 2022 before chatgpt came out I pivoted into tech.</p>
              <p>Dove deep into computer science and the tech industry.</p>
            </div>

            <div>
              <p>I now like to consider myself a software engineer.</p>
              <p>I love the industry.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
