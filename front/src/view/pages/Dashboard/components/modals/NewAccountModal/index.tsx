import { Modal } from "../../../../../components/Modal";

import { useNewAccountModalController } from "./useNewAccountModalController";

export function NewAccountModal() {
    const {
        isNewAccountModalOpen,
        closeNewAccountModal,
    } = useNewAccountModalController();

    return (
        <Modal open={isNewAccountModalOpen} onClose={closeNewAccountModal} title="Nova conta">
            Criar conta
        </Modal>
    )
}