<script lang="ts">
  import Navpro from "$lib/components/common/Navpro.svelte";
  import Footer from "$lib/components/Footer.svelte"; 
  import { type JobsInterface } from "../../../types/jobs.interface";
  import "../../../app.css";

  const formData: JobsInterface = {
    username: ''
  }
</script>

<Navpro></Navpro>

<section>
  <div class=" py-8 mx-auto">
    <div class="flex place-content-around">
      <h1 class="font-secondary text-3xl font-bold sm:text-4xl">
        Post a new project
      </h1>
      <button
        class="bg-color-blue-light w-20 rounded
                border-color-blue-light text-color-blue-highlight font-bold sm:text-xs hover:bg-color-blue-highlight
                hover:text-color-blue-light ease-in duration-200"
      >
        Preview
      </button>
    </div>
    <div class="container flex place-content-around py-8">
      <form
        class="border rounded border-color-gray mx-auto px-4 py-4 sm:w-[70%]"
      >
        <h2 class="font-secondary font-bold text-xl">Project Information</h2>
        <div class="py-8">
          <p class="font-secondary font-bold text-slate-600 py-2">
            Project title
          </p>
          <input
            class="block bg-slate-200 w-full rounded focus:border-color-blue-highlight px-3"
          />
        </div>
        <div class="flex flex-col md:flex-row gap-2">
          <div class="w-full gap-3">
            <p class="font-secondary font-bold text-slate-600 py-2">
              Project Location
            </p>
            <input
              class="block bg-slate-200 rounded w-full focus:border-color-blue-highlight px-3"
            />
          </div>
          <div class="w-full">
            <p class="font-secondary font-bold text-slate-600 py-2">
              Employment Type
            </p>
            <select name="" id="">
                <option value="">Full-time</option>
                <option value="">Middle time</option>
                <option value="">Custom</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 py-4">
          <div class="gap-3">
            <p class="font-secondary font-bold text-slate-600 py-2">
              Salary Range ($)
            </p>
            <input
              type="number"
              class="block bg-slate-200 w-full rounded focus:border-color-blue-highlight px-3"
              min="0"
              />
          </div>
          <div class="flex md:items-center md:justify-center md:pt-9">
            <div class=" py-">
              <label class="px-2 py-4" for="chk_1"
                ><input type="checkbox" id="chk_1" name="chk_1" class="py-4" /> Paid
              </label>
            </div>
            <div class=" py-">
              <label class="px-2 py-4" for="chk_2"
                ><input type="checkbox" id="chk_2" name="chk_2" class="py-4" /> No
              </label>
            </div>
          </div>
        </div>
        <div class="py-4">
          <p class="font-secondary font-bold text-slate-600 py-2">
            Project Description
          </p>
          <textarea
            class="block bg-slate-200 w-full rounded focus:border-color-blue-highlight px-3 py-2"
          >
          </textarea>
        </div>
        <div class="py-4">
          <p class="font-secondary font-bold text-slate-600 py-2">Skills</p>
          <button
            class="text-color-blue-highlight font-secondary text-s focus: border-transparent ease-in duration-200 rounded hover:bg-color-blue-highlight hover:text-white"
            >Add another skill</button
          >
        </div>
        <div
          class="py-2 px-2 rounded font-secondary text-color-secondary-highlight text-xs bg-orange-50 h-15"
        >
          <p>
            This is how candidate figures out what you need and why you're great
            to work with
          </p>
        </div>
        <div class="flex flex-row-reverse py-4">
          <select class="font-secondary text-color-blue-highlight text-s">
            <option>More options</option>
          </select>
        </div>
      </form>
    </div>
    <div class=" container flex place-content-around py-8">
      <form
        class="border rounded border-color-gray mx-auto px-4 py-4 sm:w-[70%]"
      >
        <h2 class="font-secondary font-bold text-xl">Receive Application</h2>
        <div class="py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 py-4">
            <div class="flex">
              <div class=" py-">
                <label class="px-2 py-4" for="chk_1"
                  ><input type="radio" id="chk_1" name="chk_1" class="py-4" /> Email
                </label>
              </div>
              <div class=" py-">
                <label class="px-2 py-4" for="chk_2"
                  ><input type="radio" id="chk_2" name="chk_2" class="py-4" /> External
                  Web
                </label>
              </div>
            </div>
            <div class="gap-3">
              <input
                class="block bg-slate-200 w-full rounded focus:border-color-blue-highlight px-3"
              />
            </div>
          </div>
        </div>

        <div
          class="py-2 px-2 rounded font-secondary text-color-secondary-highlight text-xs bg-orange-50 h-15"
        >
          <p>
            This is how talent figures out what you need and why you're great to
            work with
          </p>
        </div>
      </form>
    </div>
    <div class="container flex justify-end space-x-3">
      <button
        class="bg-white h-15 w-20 border rounded text-xs
                border-gray-400 text-gray-400 font-semibold sm:text-lg py-1"
        >Cancel</button
      >
      <button
        class="bg-white h-15 w-20 border rounded text-xs
                border-gray-400 text-gray-400 font-semibold sm:text-lg py-1"
        >Save</button
      >
      <button
        class="bg-color-blue-highlight text-xs w-40 border rounded py-1
                border-color-blue-light text-white font-semibold sm:text-lg hover:bg-white hover:text-color-blue-highlight ease-in duration-200"
        >Save & Publish</button
      >
    </div>
  </div>
</section>
<Footer />
