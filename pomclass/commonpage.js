class comon {
  constructor(page) {
    this.page = page;
  }

  // Individual action methods
  async pressArrowDown(steps = 1) {
    for (let i = 0; i < steps; i++) {
      await this.page.keyboard.press("ArrowDown");
    }
  }

  async pressEnter() {
    await this.page.keyboard.press("Enter");
  }

  async scrolltobottom(){

    await this.page.evaluate(()=>{

    window.scrollTo({
      
        top :document.body.scrollHeight,
        behavior :"instant"

    })
   })
  }

  }

module.exports = {comon}