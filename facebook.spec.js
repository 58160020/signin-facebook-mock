function Auth(authService) {
    this.authService = authService

    this.signInWithFacebook = (phone,password) => {
         const returnObjjest ={
        name: 'Nattanich',
        facebookId: 963852741,
        email: 'Nattanich27@gmail.com'
         }

         return returnObjjest
    }
}



test('Mock wtih 1 should return 1', () =>{
    const mockFn = jest.fn(1)
    .mockReturnValue(1)

    expect(mockFn(1)).toBe(1)
    expect(mockFn).toBeCalledWith(1)
})

test('Signin with valid credential shold pass', () => {
    const returnObjjest ={
        name: 'Nattanich',
        facebookId: 963852741,
        email: 'Nattanich27@gmail.com'
    }

    const mockFacebook = jest.fn('081777777','abc12345')
    .mockReturnValue(returnObjjest)

    let app = new Auth(mockFacebook)
    let value = app.signInWithFacebook('081777777','abc12345')

    expect(value).toEqual(returnObjjest)
})