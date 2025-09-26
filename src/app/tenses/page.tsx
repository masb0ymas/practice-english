import Questionnaire from "~/components/common/questionnaire"
import MainLayout from "~/components/layout/main-layout"
import { exercises } from "./partials/exercise-sample"
import TensesList from "./partials/tenses-list"
import TensesSummary from "./partials/tenses-summary"

export default function TensesPage() {
  return (
    <MainLayout title="Tenses - Bentuk Waktu dalam Bahasa Inggris">
      <div className="max-w-7xl mx-auto">
        <TensesList />

        {/* Tenses Summary Table */}
        <TensesSummary />

        {/* Exercise Section */}
        <Questionnaire title="Latihan Tenses" exercises={exercises} />
      </div>
    </MainLayout>
  )
}
