import Questionnaire from "~/components/common/questionnaire"
import MainLayout from "~/components/layout/main-layout"
import { exercises } from "./partials/exercise-sample"
import SeomContent from "./partials/seom-content"

export default function SeomPage() {
  return (
    <MainLayout title="SEOM - Subject-Verb Agreement">
      <div className="max-w-7xl mx-auto">
        {/* Rules Reference */}
        <SeomContent />

        {/* Exercise Section */}
        <Questionnaire title="Latihan Subject-Verb Agreement" exercises={exercises} />
      </div>
    </MainLayout>
  )
}
