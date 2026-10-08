export const navigationItems = [
  { label: 'Dasbor', icon: 'dashboard', active: true },
  { label: 'Analitik', icon: 'analytics' },
  { label: 'Pelanggan', icon: 'customers' },
  { label: 'Pengaturan', icon: 'settings' },
]

export const stats = [
  {
    label: 'Total Pendapatan',
    value: 'Rp48.294.000',
    change: '+12,8%',
    comparison: 'dibanding bulan lalu',
    icon: 'revenue',
    trendIcon: 'trendUp',
    trend: 'up',
    iconColor: 'bg-indigo-50 text-indigo-600',
  },
  {
    label: 'Pengguna Aktif',
    value: '2,420',
    change: '+8,2%',
    comparison: 'dibanding bulan lalu',
    icon: 'customers',
    trendIcon: 'trendUp',
    trend: 'up',
    iconColor: 'bg-sky-50 text-sky-600',
  },
  {
    label: 'Pesanan Baru',
    value: '1,245',
    change: '-2,4%',
    comparison: 'dibanding bulan lalu',
    icon: 'orders',
    trendIcon: 'trendDown',
    trend: 'down',
    iconColor: 'bg-amber-50 text-amber-600',
  },
  {
    label: 'Tingkat Konversi',
    value: '3,62%',
    change: '+0,6%',
    comparison: 'dibanding bulan lalu',
    icon: 'conversion',
    trendIcon: 'trendUp',
    trend: 'up',
    iconColor: 'bg-emerald-50 text-emerald-600',
  },
]

export const transactions = [
  { name: 'Dewi Lestari', email: 'dewi.lestari@gmail.com', date: '24 Okt 2025', amount: 2400000, method: 'Transfer Bank BCA', status: 'Lunas' },
  { name: 'Budi Santoso', email: 'budi.santoso@gmail.com', date: '23 Okt 2025', amount: 1250000, method: 'DANA', status: 'Menunggu' },
  { name: 'Siti Nurhaliza', email: 'siti.nurhaliza@gmail.com', date: '22 Okt 2025', amount: 890000, method: 'GoPay', status: 'Lunas' },
  { name: 'Andi Pratama', email: 'andi.pratama@gmail.com', date: '21 Okt 2025', amount: 3200000, method: 'Transfer Bank Mandiri', status: 'Gagal' },
  { name: 'Putri Maharani', email: 'putri.maharani@gmail.com', date: '20 Okt 2025', amount: 560000, method: 'QRIS', status: 'Lunas' },
  { name: 'Rizky Firmansyah', email: 'rizky.firmansyah@gmail.com', date: '19 Okt 2025', amount: 1780000, method: 'Transfer Bank BRI', status: 'Dibatalkan' },
  { name: 'Ayu Wulandari', email: 'ayu.wulandari@gmail.com', date: '18 Okt 2025', amount: 940000, method: 'ShopeePay', status: 'Menunggu' },
  { name: 'Fajar Ramadhan', email: 'fajar.ramadhan@gmail.com', date: '17 Okt 2025', amount: 2150000, method: 'LinkAja', status: 'Lunas' },
]

export const statusStyles = {
  Aktif: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300',
  Lunas: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300',
  Menunggu: 'bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300',
  Gagal: 'bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-300',
  Dibatalkan: 'bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-300',
}
