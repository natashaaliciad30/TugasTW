export const renderRevenueChart = () => `
  <section class="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:p-6" aria-labelledby="chart-heading">
    <div class="mb-5 flex flex-wrap items-start justify-between gap-3">
      <div>
        <h2 id="chart-heading" class="text-base font-semibold text-slate-900 dark:text-white">Tren Pendapatan</h2>
        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Perkembangan pendapatan selama 7 bulan terakhir</p>
      </div>
      <span class="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">7 bulan terakhir</span>
    </div>
    <div class="overflow-hidden" role="img" aria-label="Grafik garis tren pendapatan dari Januari hingga Juli yang menunjukkan kenaikan secara umum">
      <svg viewBox="0 0 800 250" class="h-52 w-full overflow-visible sm:h-64" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="revenue-chart-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#6366f1" stop-opacity=".2" />
            <stop offset="100%" stop-color="#6366f1" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path d="M48 205H790M48 155H790M48 105H790M48 55H790" fill="none" class="stroke-slate-200 dark:stroke-slate-800" stroke-dasharray="4 6" />
        <path d="M48 185C100 175 120 161 160 166S225 142 270 150 335 135 380 138 450 105 490 116 555 85 600 98 660 70 710 79 755 48 790 42V215H48Z" fill="url(#revenue-chart-fill)" />
        <path d="M48 185C100 175 120 161 160 166S225 142 270 150 335 135 380 138 450 105 490 116 555 85 600 98 660 70 710 79 755 48 790 42" fill="none" stroke="#6366f1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" />
        <circle cx="48" cy="185" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
        <circle cx="160" cy="166" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
        <circle cx="270" cy="150" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
        <circle cx="380" cy="138" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
        <circle cx="490" cy="116" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
        <circle cx="600" cy="98" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
        <circle cx="710" cy="79" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
        <text x="48" y="242" class="fill-slate-400 dark:fill-slate-500" font-size="12">Jan</text>
        <text x="160" y="242" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500" font-size="12">Feb</text>
        <text x="270" y="242" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500" font-size="12">Mar</text>
        <text x="380" y="242" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500" font-size="12">Apr</text>
        <text x="490" y="242" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500" font-size="12">Mei</text>
        <text x="600" y="242" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500" font-size="12">Jun</text>
        <text x="790" y="242" text-anchor="end" class="fill-slate-400 dark:fill-slate-500" font-size="12">Jul</text>
      </svg>
    </div>
  </section>
`
