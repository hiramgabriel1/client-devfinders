<script>
    import "../../../app.css"
</script>

<section>
    <div class="container">
        <div class="lg:py-4">
          <div>
            <p
              class="font-secondary font-bold text-slate-600 py-2 text-s lg:text-2xl"
            >
              Search
            </p>
            <input
              class="block bg-slate-200 w-full rounded focus:border-color-blue-highlight placeholder:text-slate-800 placeholder:text-xs px-1 placeholder:lg:text-sm lg:h-6"
              placeholder="Designer"
            />
          </div>
          <div>
            <div class="flex justify-between">
              <p
                class="font-secondary font-bold text-slate-600 py-2 text-s lg:text-2xl"
              >
                Filter
              </p>
              <button
                class=" text-xs rounded-md
                    border-0 text-color-blue-highlight font-bold sm:text-s
                    hover:text-color-blue-light ease-in duration-200 lg:text-sm"
              >
                Clear filters
              </button>
            </div>
    
            <div class="flex place-content-between font-secondary">
              <select
                class="block bg-slate-200 rounded text-xs h-6 w-[23%] lg:h-6 lg:text-sm text-slate-600"
              >
                <option>Location</option>
              </select>
              <select
                class="block bg-slate-200 rounded text-xs h-6 w-[23%] lg:h-6 lg:text-sm text-slate-600"
              >
                <option>Experience level</option>
              </select>
              <select
                class="block bg-slate-200 rounded text-xs h-6 w-[23%] lg:h-6 lg:text-sm text-slate-600"
              >
                <option>Industry</option>
              </select>
              <select
                class="block bg-slate-200 rounded text-xs h-6 w-[23%] lg:h-6 lg:text-sm text-slate-600"
              >
                <option>Company type</option>
              </select>
            </div>
          </div>
        </div>
      </div>
</section>