import React, { Fragment } from 'react'
import Header from '../../Components/Header/Header'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const Sobre = () => {

    return (
        <Fragment>
            <Header />

            <Container maxWidth='sm'>
                <h1>Sobre</h1>
                <Typography variant='body1' component='p'>
                    A Casa do Código é uma editora que desenvolve e edita livros
                    em diversos formatos.
                </Typography>
            </Container>
        </Fragment>
    )
}
export default Sobre
