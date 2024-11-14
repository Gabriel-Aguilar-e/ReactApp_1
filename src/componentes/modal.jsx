import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '4px solid #ff0565',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Abrir modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Titulo modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit nibh venenatis fermentum cras, vivamus non tempus sociis per. Dapibus sodales posuere ut leo vitae interdum porta rhoncus tellus nisi dictum duis varius, ridiculus elementum ac et donec ante consequat class sagittis nam integer vivamus. Nisl lobortis placerat vestibulum laoreet hac rutrum iaculis sem semper, lacinia aenean vehicula pulvinar curabitur ornare congue.
            Magna malesuada interdum nisi ut egestas in maecenas ullamcorper montes, integer fermentum placerat mauris rhoncus tristique natoque dapibus, mollis libero orci felis ultricies praesent primis sagittis. Eleifend odio egestas vestibulum facilisi tempor aptent nascetur rhoncus euismod condimentum rutrum, primis at proin ornare lectus per eros urna nostra. Nostra commodo ultricies viverra cubilia etiam bibendum mus pulvinar justo, tempor cursus vehicula litora pharetra libero scelerisque purus sapien nullam, nam erat tortor imperdiet eros nisl mattis quis.
          </Typography>
        </Box>
      </Modal>
      <Link to="/">Incio</Link>
    </div>
  );
}