import React from 'react'
import Paper from '@mui/material/Paper';
import './Footer.scss'

export default function Footer() {
    return (
        <div>
            <Paper elevation={5} className='footer'>
                &copy; Nedal Al Saleh
            </Paper>
        </div>
    )
}
