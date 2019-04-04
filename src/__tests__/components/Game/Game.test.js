import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { Game }  from '../../../components/Game/index'

const personagens = {
    list: [],
    results: []
}

describe('Game component tests', () => {
    const wrapper = shallow(<Game personagens={personagens} />)

    test('Should have ListaPersonagens component' , () => {
        expect(wrapper.find('ListaPersonagens')).to.haveLength(1)
    })
})
