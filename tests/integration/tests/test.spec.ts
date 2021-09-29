import axios from 'axios'

describe('proxy', () => {
  it('should return origin=serve response', async () => {
    const res = await axios.get('http://localhost:3000/get?id=1')
    expect(res.data).toStrictEqual({ title: '1', origin: 'serve' })
  })
})
