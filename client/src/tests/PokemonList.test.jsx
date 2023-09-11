import PokemonList from '../components/PokemonList'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

//where are we testing
describe('PokemonList Component', () => {
    //what are we testing
    test('displays pokemon name in the browser', () => {

        //renders the PokemonList component in the testing environment
        render(<PokemonList />)

        //Checking the jest-environment browser window for the string 'Bubla Fett'
        const bulba = screen.getByText('Bulba')

        //how are we testing/what do we _expect_ to see
        expect(bulba).toBeInTheDocument()
    })
})