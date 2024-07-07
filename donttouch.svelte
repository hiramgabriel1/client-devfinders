<div
  class="bg-no-repeat bg-cover bg-center relative"
  style="background-image: url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80);"
>
  <div
    class="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"
  ></div>
  <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
    <div class="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
      <div class="self-start hidden lg:flex flex-col text-white">
        <!-- <img src="" class="mb-3" /> -->
        <h1 class="mb-3 font-bold text-5xl">Hi. Welcome to Findev. Join now</h1>
        <p class="pr-3">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups
        </p>
      </div>
    </div>
    <div class="flex justify-center self-center z-10">
      <div class="p-12 bg-white mx-auto rounded-2xl w-100">
        <div class="mb-4">
          <h3 class="font-semibold text-2xl text-gray-800">Sign In</h3>
          <p class="text-gray-500">Please sign in to your account.</p>
        </div>
        <form class="space-y-5" on:submit|preventDefault={sendData}>
          <!-- username -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Username</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.username}
              placeholder="Username"
            />
          </div>
          <!-- avatar_url -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Avatar URL</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.avatar_url}
              placeholder="Avatar URL"
            />
          </div>
          <!-- profesion -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Profession</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.profesion}
              placeholder="Profession"
            />
          </div>
          <!-- email -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Email</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.email}
              placeholder="Email"
            />
          </div>
          <!-- password -->
          <div class="space-y-2">
            <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide"
              >Password</label
            >
            <input
              class="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="password"
              bind:value={formData.password}
              placeholder="Enter your password"
            />
          </div>
          <!-- skills -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Skills</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.skills}
              placeholder="Skills (comma separated)"
            />
          </div>
          <!-- descriptionLong -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Long Description</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.descriptionLong}
              placeholder="Long Description"
            />
          </div>
          <!-- about -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >About</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.about}
              placeholder="About"
            />
          </div>
          <!-- social -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Social</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.social}
              placeholder="Social (comma separated)"
            />
          </div>
          <!-- workExperience -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Work Experience</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.workExperience}
              placeholder="Work Experience"
            />
          </div>
          <!-- ownerProjectId -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Owner Project ID</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.ownerProjectId}
              placeholder="Owner Project ID"
            />
          </div>
          <!-- companyName -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Company Name</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.companyName}
              placeholder="Company Name"
            />
          </div>
          <!-- employmentType -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Employment Type</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.employmentType}
              placeholder="Employment Type"
            />
          </div>
          <!-- titleWork -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Title Work</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.titleWork}
              placeholder="Title Work"
            />
          </div>
          <!-- isCurrent -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Is Current</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="checkbox"
              bind:checked={formData.isCurrent}
            />
          </div>
          <!-- isAdminUser -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Is Admin User</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="checkbox"
              bind:checked={formData.isAdminUser}
            />
          </div>
          <!-- isUserPremium -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Is User Premium</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="checkbox"
              bind:checked={formData.isUserPremium}
            />
          </div>
          <!-- date -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Date</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="date"
              bind:value={formData.date}
            />
          </div>
          <!-- description -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Description</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.description}
              placeholder="Description"
            />
          </div>
          <!-- titleProject -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Title Project</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.titleProject}
              placeholder="Title Project"
            />
          </div>
          <!-- descriptionProject -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Description Project</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.descriptionProject}
              placeholder="Description Project"
            />
          </div>
          <!-- workSkills -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Work Skills</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.workSkills}
              placeholder="Work Skills (comma separated)"
            />
          </div>
          <!-- role -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Role</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="text"
              bind:value={formData.role}
              placeholder="Role"
            />
          </div>
          <!-- createdAt -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 tracking-wide"
              >Created At</label
            >
            <input
              class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type="date"
              bind:value={formData.createdAt}
            />
          </div>
          <!-- submit button -->
          <div>
            <button
              type="submit"
              class="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
            >
              Register
            </button>
          </div>
        </form>
        <div class="pt-5 text-center text-gray-400 text-xs">
          <span>
            Copyright © 2024
            <p title="Findev" class="text-green hover:text-green-500">Findev</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
