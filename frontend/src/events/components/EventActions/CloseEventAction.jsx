import { useState } from "react";
import { useEventsStore } from "../../../hooks"
import Swal from "sweetalert2";

export const CloseEventAction = () => {

    const { startChangingEventStatus } = useEventsStore();
    const [ isLoading, setIsLoading ] = useState(false);

    const handleSubmit = async() => {

        setIsLoading(true);

        Swal.fire({
            title: 'Seguro?',
            text: "La votación no se podrá volver a abrir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Cerrar votación',
            cancelButtonText: 'Cancelar',
            buttonsStyling: false,
            customClass:{
                cancelButton:'btn btn-secondary',
                confirmButton:'btn btn-danger me-3'
            }}).then(async(result) => {
                if (result.isConfirmed) {
                await startChangingEventStatus('Closed');
                }
            })

        setIsLoading(false);
    }

    return (
        <button 
            className="btn btn-secondary"
            onClick={ handleSubmit }
            disabled={ isLoading }
        >
            {
                isLoading
                ?
                    <div className="spinner-border mt-1 p-0" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                :
                'Cerrar votación'
            }
        </button>
    )
}
