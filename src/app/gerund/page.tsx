import Questionnaire from "~/components/common/questionnaire"
import MainLayout from "~/components/layout/main-layout"
import { exercises } from "./partials/exercise-sample"
import GerundComparison from "./partials/gerund-comparison"
import GerundContent from "./partials/gerund-content"

export default function GerundPage() {
  return (
    <MainLayout title="Gerund - Kata Kerja + ing">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <GerundContent />

        {/* Gerund vs Infinitive Comparison */}
        <GerundComparison />

        {/* Exercise Section */}
        <Questionnaire title="Latihan Gerund" exercises={exercises} />
      </div>
    </MainLayout>
  )
}
