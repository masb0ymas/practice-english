import Questionnaire from "~/components/common/questionnaire"
import MainLayout from "~/components/layout/main-layout"
import AdaContent from "./partials/ada-content"
import { exercises } from "./partials/exercise-sample"

export default function AdaPage() {
  return (
    <MainLayout title="ADA - Articles, Determiners & Adjectives">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <AdaContent />

        {/* Exercise Section */}
        <Questionnaire title="Latihan ADA" exercises={exercises} />
      </div>
    </MainLayout>
  )
}
