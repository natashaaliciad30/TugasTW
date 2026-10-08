import { icon } from '../utils/icons.js'

const analyticsStats = [
  { label: 'Total Pengunjung', value: '24.860', change: '+12,4%', trend: 'up', icon: 'customers', color: 'text-sky-600 dark:text-sky-300' },
  { label: 'Tingkat Konversi', value: '3,62%', change: '+0,6%', trend: 'up', icon: 'conversion', color: 'text-indigo-600 dark:text-indigo-300' },
  { label: 'Durasi Rata-rata', value: '4 m 32 d', change: '+8,2%', trend: 'up', icon: 'trendUp', color: 'text-emerald-600 dark:text-emerald-300' },
  { label: 'Rasio Pentalan', value: '32,4%', change: '-3,1%', trend: 'down', icon: 'trendDown', color: 'text-amber-600 dark:text-amber-300' },
]

const trafficSources = [
  { name: 'Pencarian Organik', visitors: '10.441', share: 42, color: 'bg-indigo-500' },
  { name: 'Media Sosial', visitors: '6.961', share: 28, color: 'bg-sky-500' },
  { name: 'Akses Langsung', visitors: '4.475', share: 18, color: 'bg-emerald-500' },
  { name: 'Situs Rujukan', visitors: '2.983', share: 12, color: 'bg-amber-500' },
]

const topPages = [
  { path: '/', title: 'Beranda', views: '8.420', change: '+18,2%' },
  { path: '/produk', title: 'Katalog Produk', views: '6.315', change: '+11,7%' },
  { path: '/harga', title: 'Paket Harga', views: '4.208', change: '+6,4%' },
  { path: '/blog/panduan', title: 'Panduan Memulai', views: '2.754', change: '-2,1%' },
]

export const renderAnalytics = () => `
  <section aria-labelledby="analytics-heading">
    <div class="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 id="analytics-heading" class="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Analitik</h1>
        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Pahami perilaku pengunjung dan performa konten Anda.</p>
      </div>
      <span class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">7 hari terakhir</span>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      ${analyticsStats
        .map(({ label, value, change, trend, icon: iconName, color }) => `
          <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
            <div class="flex items-start justify-between gap-3">
              <div>
                <h2 class="text-sm font-medium text-slate-500 dark:text-slate-400">${label}</h2>
                <p class="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">${value}</p>
              </div>
              <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 ${color} dark:bg-slate-800" aria-hidden="true">
                ${icon(iconName, 'h-5 w-5')}
              </span>
            </div>
            <p class="mt-4 flex items-center gap-1 text-xs">
              <span class="inline-flex items-center gap-0.5 font-semibold text-emerald-600 dark:text-emerald-400">
                ${icon(trend === 'up' ? 'trendUp' : 'trendDown', 'h-3.5 w-3.5')}
                ${change}
              </span>
              <span class="text-slate-400 dark:text-slate-500">dibanding periode sebelumnya</span>
            </p>
          </article>
        `)
        .join('')}
    </div>
  </section>

  <div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
    <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none xl:col-span-2 sm:p-6" aria-labelledby="visitors-chart-heading">
      <div class="mb-5">
        <h2 id="visitors-chart-heading" class="text-base font-semibold text-slate-900 dark:text-white">Tren Pengunjung</h2>
        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Jumlah pengunjung unik selama 7 hari terakhir</p>
      </div>
      <div class="overflow-hidden" role="img" aria-label="Grafik pengunjung selama tujuh hari yang berfluktuasi tetapi menunjukkan kenaikan secara keseluruhan">
        <svg viewBox="0 0 800 250" class="h-52 w-full overflow-visible sm:h-64" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="visitors-chart-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="#6366f1" stop-opacity=".2" />
              <stop offset="100%" stop-color="#6366f1" stop-opacity="0" />
            </linearGradient>
          </defs>
          <path d="M48 205H790M48 155H790M48 105H790M48 55H790" fill="none" class="stroke-slate-200 dark:stroke-slate-800" stroke-dasharray="4 6" />
          <path d="M48 168C88 158 130 136 172 139S254 160 296 153 378 108 420 112 502 132 544 126 626 75 668 82 748 108 790 101V215H48Z" fill="url(#visitors-chart-fill)" />
          <path d="M48 168C88 158 130 136 172 139S254 160 296 153 378 108 420 112 502 132 544 126 626 75 668 82 748 108 790 101" fill="none" stroke="#6366f1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" />
          <circle cx="48" cy="168" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
          <circle cx="172" cy="139" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
          <circle cx="296" cy="153" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
          <circle cx="420" cy="112" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
          <circle cx="544" cy="126" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
          <circle cx="668" cy="82" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
          <circle cx="790" cy="101" r="4" fill="#fff" stroke="#6366f1" stroke-width="2" vector-effect="non-scaling-stroke" />
          <text x="48" y="242" class="fill-slate-400 dark:fill-slate-500" font-size="12">Sen</text>
          <text x="172" y="242" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500" font-size="12">Sel</text>
          <text x="296" y="242" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500" font-size="12">Rab</text>
          <text x="420" y="242" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500" font-size="12">Kam</text>
          <text x="544" y="242" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500" font-size="12">Jum</text>
          <text x="668" y="242" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500" font-size="12">Sab</text>
          <text x="790" y="242" text-anchor="end" class="fill-slate-400 dark:fill-slate-500" font-size="12">Min</text>
        </svg>
      </div>
    </section>

    <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:p-6" aria-labelledby="traffic-sources-heading">
      <div class="mb-6">
        <h2 id="traffic-sources-heading" class="text-base font-semibold text-slate-900 dark:text-white">Sumber Trafik</h2>
        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Asal pengunjung Anda</p>
      </div>
      <ul class="space-y-5">
        ${trafficSources
          .map(({ name, visitors, share, color }) => `
            <li>
              <div class="mb-2 flex items-center justify-between gap-3 text-sm">
                <span class="truncate font-medium text-slate-700 dark:text-slate-200">${name}</span>
                <span class="shrink-0 text-slate-500 dark:text-slate-400">${share}%</span>
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800" role="progressbar" aria-label="${name}" aria-valuenow="${share}" aria-valuemin="0" aria-valuemax="100">
                <div class="h-full rounded-full ${color}" style="width: ${share}%"></div>
              </div>
              <p class="mt-1.5 text-xs text-slate-400 dark:text-slate-500">${visitors} pengunjung</p>
            </li>
          `)
          .join('')}
      </ul>
    </section>
  </div>

  <section class="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none" aria-labelledby="top-pages-heading">
    <div class="border-b border-slate-200 px-5 py-5 dark:border-slate-800 sm:px-6">
      <h2 id="top-pages-heading" class="text-base font-semibold text-slate-900 dark:text-white">Halaman Terpopuler</h2>
      <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Halaman dengan jumlah kunjungan tertinggi</p>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full min-w-[580px] text-left text-sm">
        <thead class="bg-slate-50 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
          <tr>
            <th scope="col" class="px-5 py-3 sm:px-6">Halaman</th>
            <th scope="col" class="px-5 py-3">Jalur</th>
            <th scope="col" class="px-5 py-3">Pengunjung</th>
            <th scope="col" class="px-5 py-3">Perubahan</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
          ${topPages
            .map(({ path, title, views, change }) => `
              <tr class="transition hover:bg-slate-50/80 dark:hover:bg-slate-800/40">
                <th scope="row" class="px-5 py-4 font-medium text-slate-800 dark:text-slate-100 sm:px-6">${title}</th>
                <td class="px-5 py-4 text-slate-500 dark:text-slate-400">${path}</td>
                <td class="px-5 py-4 font-medium text-slate-700 dark:text-slate-200">${views}</td>
                <td class="px-5 py-4 font-medium ${change.startsWith('-') ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}">${change}</td>
              </tr>
            `)
            .join('')}
        </tbody>
      </table>
    </div>
  </section>
`
