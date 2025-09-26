import Questionnaire from "~/components/common/questionnaire"
import MainLayout from "~/components/layout/main-layout"
import { exercises } from "./partials/exercise-sample"
import ModalContent from "./partials/modal-content"

export default function ModalsPage() {
  return (
    <MainLayout title="Modal & Auxiliary Verbs">
      <div className="max-w-7xl mx-auto">
        {/* Modal Verbs Reference */}
        <ModalContent />

        {/* Exercise Section */}
        <Questionnaire title="Latihan Modal Verbs" exercises={exercises} />
      </div>
    </MainLayout>
  )
}
