import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "./css/modalCalendar.css";

const ModalCalendar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="containerModal">
      <Button className="btnback" onClick={handleOpen}>Ver calendario </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
          <>
        <div className="modalContainerCentral">
          <label>Calendario de eventos agregados</label>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=800&wkst=1&bgcolor=%23ffffff&ctz=America%2FGuatemala&src=dHVkdWxpc3RjYWxlbmRhckBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZXMtNDE5Lmd0I2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
            title="calendario"
           ></iframe>
           <button onClick={()=>handleClose()} className="btnback">Regresar</button>
        </div>
            </>
      </Modal>
    </div>
  );
};

export default ModalCalendar;
