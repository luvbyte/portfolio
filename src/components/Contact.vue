<template>
  <section id="contact" class="mt-16 py-10 px-4 md:px-0 font-body">
    <!-- HEADER -->
    <div class="text-center mb-8">
      <aos-vue animation="zoom-in">
        <h2 class="text-3xl font-bold tracking-wide font-heading">📬 Contact Me</h2>
      </aos-vue>
      <p class="text-gray-500 text-sm mt-1">Have a project or idea? I’d love to hear from you.</p>
      <div class="divider w-24 mx-auto mt-2"></div>
    </div>

    <!-- CONTENT -->
    <div class="flex flex-col md:flex-row gap-10 items-start">
      <!-- LEFT -->
      <div class="md:w-1/2 space-y-4">
        <h3 class="text-xl font-semibold flex items-center gap-2 font-heading">👇 Get in Touch</h3>

        <p class="text-gray-500 text-sm leading-relaxed">
          Whether it's a freelance project, full-time opportunity, or just a question — I'm always
          open to connecting.
        </p>

        <div class="mt-4 space-y-3">
          <div class="flex items-center gap-3">
            <span class="text-primary text-xl">📧</span>
            <span class="font-heading italic">lovemelong@protonmail.com</span>
          </div>
        </div>

        <div class="mt-6 flex gap-4 italic font-heading">
          <a
            href="https://www.linkedin.com/in/coffee-boy-b4491635a"
            class="hover:text-primary transition"
            >💼 LinkedIn</a
          >
          <a href="https://github.com/luvbyte" class="hover:text-primary transition">🐙 GitHub</a>
        </div>
      </div>

      <!-- RIGHT -->
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        class="md:w-1/2 bg-base-200/60 backdrop-blur p-6 rounded-xl shadow-md border border-base-300/50 space-y-4"
      >
        <input type="hidden" name="access_key" value="37fe6db4-c488-414d-a115-e407ec54ce0d" />
        <input required type="text" placeholder="Your Name" class="input input-bordered w-full" />
        <input required type="email" placeholder="Your Email" class="input input-bordered w-full" />
        <textarea
          required
          placeholder="Your Message"
          class="textarea textarea-bordered w-full h-32"
        ></textarea>

        <button
          class="btn btn-primary w-full mt-3 shadow-md hover:shadow-lg transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>
