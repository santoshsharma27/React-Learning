import TextExpander from "./TextExpander";

function Expander() {
  return (
    <div className="space-y-6 bg-gray-100 p-4">
      <h1 className="text-center text-2xl font-extrabold">Text Expander</h1>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It&apos;s the stuff of dreams and science
        fiction, but believe it or not, space travel is a real thing. Humans and
        robots are constantly venturing out into the cosmos to uncover its
        secrets and push the boundaries of what&apos;s possible.
      </TextExpander>

      <TextExpander collapsedNumWords={20} buttonColor="text-orange-500">
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it&apos;s not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        className="rounded-lg border bg-white p-4 shadow-md"
        expanded="true"
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we&apos;ll
        discover next!
      </TextExpander>
    </div>
  );
}

export default Expander;
