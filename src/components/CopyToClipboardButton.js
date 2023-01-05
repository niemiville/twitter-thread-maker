//Source: https://fwuensche.medium.com/react-button-to-copy-to-clipboard-75ef5ecdc708
import { Button, Snackbar, IconButton } from '@mui/material'
import { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CopyToClipboardButton = ({tweet}) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
      setOpen(true)
      navigator.clipboard.writeText(tweet)
    }
    
    return (
        <>
          <IconButton onClick={handleClick}><ContentCopyIcon></ContentCopyIcon></IconButton>
          <Snackbar
            open={open}
            onClose={() => setOpen(false)}
            autoHideDuration={1000}
            message="Copied to clipboard"
          />
        </>
    )
}

export default CopyToClipboardButton