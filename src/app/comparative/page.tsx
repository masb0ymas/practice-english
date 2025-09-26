import Questionnaire from "~/components/common/questionnaire"
import MainLayout from "~/components/layout/main-layout"
import ComparativeContent from "./partials/comparative-content"
import { exercises } from "./partials/exercise-sample"

export default function ComparativePage() {
  return (
    <MainLayout title="Comparative Degree - Tingkat Perbandingan">
      <div className="max-w-7xl mx-auto">
        {/* Type Filter */}
        <ComparativeContent />

        {/* Exercise Section */}
        <Questionnaire title="Latihan Comparative Degree" exercises={exercises} />
      </div>
    </MainLayout>
  )
}
