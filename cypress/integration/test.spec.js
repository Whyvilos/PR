describe('Verification of exponentiation', function() {
    
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Calculate 2^10=1024',()=>{
        cy.get(".inNum").eq(0).clear().type("2")
        cy.get(".inPow").eq(0).clear().type("10")
        cy.get(".eql").eq(0).click()
        // cy.get("h1").should('have.value','5')
        cy.get('.answer').should('have.text','1024')
    })

    it('Calculate 10^2=100',()=>{
        cy.get(".inNum").eq(0).clear().type("10")
        cy.get(".inPow").eq(0).clear().type("2")
        cy.get(".eql").eq(0).click()
        // cy.get("h1").should('have.value','5')
        cy.get('.answer').should('have.text','100')
    })

    it('Calculate 0.25^2=0.0625',()=>{
        cy.get(".inNum").eq(0).clear().type("0.25")
        cy.get(".inPow").eq(0).clear().type("2")
        cy.get(".eql").eq(0).click()
        // cy.get("h1").should('have.value','5')
        cy.get('.answer').should('have.text','0.0625')
    })

    it('Calculate 16^0.5=4',()=>{
        cy.get(".inNum").eq(0).clear().type("16")
        cy.get(".inPow").eq(0).clear().type("0.5")
        cy.get(".eql").eq(0).click()
        // cy.get("h1").should('have.value','5')
        cy.get('.answer').should('have.text','4')
    })

    it('Calculate 0.04^0.5=0.2',()=>{
        cy.get(".inNum").eq(0).clear().type("0.04")
        cy.get(".inPow").eq(0).clear().type("0.5")
        cy.get(".eql").eq(0).click()
        // cy.get("h1").should('have.value','5')
        cy.get('.answer').should('have.text','0.2')
    })

    it('Calculate 160^200=Очень много',()=>{
        cy.get(".inNum").eq(0).clear().type("160")
        cy.get(".inPow").eq(0).clear().type("200")
        cy.get(".eql").eq(0).click()
        // cy.get("h1").should('have.value','5')
        cy.get('.answer').should('have.text','Infinity')
    })

    it('Calculate 12345678^0=1',()=>{
        cy.get(".inNum").eq(0).clear().type("12345678")
        cy.get(".inPow").eq(0).clear().type("0")
        cy.get(".eql").eq(0).click()
        // cy.get("h1").should('have.value','5')
        cy.get('.answer').should('have.text','1')
    })

    it('Calculate 0^12345678=0',()=>{
        cy.get(".inNum").eq(0).clear().type("0")
        cy.get(".inPow").eq(0).clear().type("12345678")
        cy.get(".eql").eq(0).click()
        // cy.get("h1").should('have.value','5')
        cy.get('.answer').should('have.text','0')
    })

})