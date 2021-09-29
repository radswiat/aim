import axios from 'axios'

describe('asd', () => {
  it('asdad', async () => {
    const res = await axios.get('http://localhost:3000/get?id=1')
    expect(res.data).toStrictEqual({ title: 1 })
  })
})
