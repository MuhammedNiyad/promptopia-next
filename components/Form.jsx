import Link from "next/link";
import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="flex-col w-full max-w-full flex-start">
      <h1 className="text-left head_text">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="max-w-md text-left desc">
        {type} and share amazing prompts with the world,
        <br className="hidden sm:block" />
        and let your imagination run wild with any AI-powered platform.
      </p>

      <form
        className="flex flex-col w-full max-w-2xl mt-10 gap-7 glassmorphism"
        onSubmit={handleSubmit}
      >
        <label htmlFor="">
          <span className="text-base font-semibold text-gray-700 font-satoshi">
            Your AI Prompt
          </span>
          <textarea
            placeholder="Write your prompt here..."
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            required
            className="form_textarea"
          />
        </label>
        
        <label htmlFor="">
          <span className="text-base font-semibold text-gray-700 font-satoshi">
            Tag
            <span className="font-normal"> (#product, #webdevelopment, #idea)</span>
          </span>
          <input
            placeholder="#tag"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            required
            className="form_input"
          />
        </label>

        <div className="gap-4 mx-3 mb-5 flex-end">
          <Link href="/" className="text-sm text-gray-500">
            Cancel
          </Link>
          <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
            {submitting ? `${type}...` : type}
          </button>
        </div>
        
      </form>
    </section>
  );
};

export default Form;
