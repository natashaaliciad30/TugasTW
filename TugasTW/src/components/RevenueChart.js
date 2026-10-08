export const renderRevenueChart = () => `
  <section class="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:p-6" aria-labelledby="chart-heading">
    <div class="mb-5 flex flex-wrap items-start justify-between gap-3">
      <div>
        <h2 id="chart-heading" class="text-base font-semibold text-slate-900 dark:text-white">Tren Pendapatan</h2>
        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Perkembangan pendapatan selama 7 bulan terakhir</p>
      </div>
      <span class="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">7 bulan terakhir</span>
    </div>
    <div class="overflow-hidden" role="img" aria-label="Grafik tren pendapatan dari Januari hingga Juli yang berfluktuasi tetapi meningkat secara keseluruhan">
      <svg viewBox="0 0 800 250" class="h-52 w-full overflow-visible sm:h-64" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="revenue-chart-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#6366f1" stop-opacity=".2" />
            <stop offset="100%" stop-color="#6366f1" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path d="M48 205H790M48 155H790M48 105H790M48 55H790" fill="none" class="stroke-slate-200 dark:stroke-slate-800" stroke-dasharray="4 6" />
        <path d="M48 180C88 169 130 143 170 145S250 167 292 162 372 108 414 110 494 138 536 132 616 83 658 88 748 111 790 104V215H48Z" fill="url(#revenue-chart-fill)" />
        <path d="M48 180C88 169 130 143 170 145S250 167 292 162 372 108 414 110 494 138 536 132 616 83 658 88 748 111 790 104" fill="none" stroke="#6366f1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" />
        <circle cx="48" cy="180" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
        <circle cx="170" cy="145" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
        <circle cx="292" cy="162" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
        <circle cx="414" cy="110" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
        <circle cx="536" cy="132" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
        <circle cx="658" cy="88" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
        <circle cx="790" cy="104" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
        <text x="48" y="242" class="fill-slate-400 dark:fill-slate-500" font-size="12">Jan</text>
        <text x="170" y="242" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500" font-size="12">Feb</text>
        <text x="292" y="242" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500" font-size="12">Mar</text>
        <text x="414" y="242" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500" font-size="12">Apr</text>
        <text x="536" y="242" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500" font-size="12">Mei</text>
        <text x="658" y="242" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500" font-size="12">Jun</text>
        <text x="790" y="242" text-anchor="end" class="fill-slate-400 dark:fill-slate-500" font-size="12">Jul</text>
      </svg>
    </div>
  </section>
`
