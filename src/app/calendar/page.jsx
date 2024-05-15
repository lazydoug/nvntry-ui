import Calendar from '@/components/Calender/Calendar'
import DefaultLayout from '@/components/DefaultLayout'

export const metadata = {
  title: 'Next.js Calender | TailAdmin - Next.js Dashboard Template',
  description:
    'This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template',
}

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <Calendar />
    </DefaultLayout>
  )
}

export default CalendarPage
