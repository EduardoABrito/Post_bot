const {Builder, By, Key, until} = require('selenium-webdriver')
const config = require("./config.js")
const fs = require('fs')
config.descricao = config.descricao.split('\n')
let filename=[];
let driver = new Builder().forBrowser('chrome').build()

async function sleep(timeout){
  return await new Promise(r => setTimeout(r, timeout))
}


function files(diretorio){ fs.readdir(diretorio, (err, files) => {     
    files.forEach(file => {
     console.log(file)
     filename.push(file)
    })
})}


async function login(){
  await driver.get("https://www.facebook.com/login/?next=%2Fcreatorstudio%2F%3Freference%3Dvisit_from_seo")
  await driver.findElement(By.id("email")).sendKeys(config.email)
  await driver.findElement(By.id("pass")).sendKeys(config.senha)   
  await driver.findElement(By.id("loginbutton")).click()
  await sleep(20000)
  await driver.get("https://business.facebook.com/creatorstudio?tab=instagram_content_posts&collection_id=all_pages")
  await sleep(5000)
}
async function abrir_post(){
  await driver.findElements(By.css(".rwb8dzxj.yukb02kx")).then(async el => await el[1].click())
  await sleep(1000)
  await driver.findElements(By.css(".g1fckbup.ct5fwkgv.mr4k7n6j.sdgvddc7.b8b10xji.okyvhjd0.rpcniqb6.jytk9n0j.ojz0a1ch.avm085bc.mtc4pi7f.jza0iyw7.njc9t6cs.qhe9tvzt.spzutpn9.puibpoiz.svsqgeze.rwb8dzxj.har4n1i8.hv94jbsx.nlmdo9b9.h706y6tg.qbdq5e12.j90q0chr.rbzcxh88.h8e39ki1.rgsc13q7.a53abz89.leumhs8v.iagzkrdz.my9zkn4v.it3lqkse.s7wjoji2.jztyeye0.d5rc5kzv.jdcxz0ji.frrweqq6.qnavoh4n")).then(async el => await el[1].click())
  await sleep(1000)
}
async function criar_post(dia){
  await driver.findElement(By.css("._5rpb")).click()
  await sleep(1000)
  await driver.findElement(By.css("._5yk2")).sendKeys("Comente eu quero")   
  await sleep(1000)
  await driver.findElement(By.css("._82ht")).click()
  await sleep(600)
 var element = await driver.findElement(By.css("._n._5f0v"))
 element.sendKeys(config.diretorio)
 sleep(1000)
}
async function programar_data_hora(){
await driver.findElement(By.css("._8122")).click()
await sleep(1000)
await driver.findElements(By.css("._811a._811b._811c._3qn7._61-0._2fyh._3qnf")).then( async el => await el[0].click() )
await driver.findElements(By.css("._58al"))
await sleep(1000)
.then( async el => 
  await el[1].click() ||
  await el[1].sendKeys("22/12/2020", Key.RETURN, Key.TAB, "18", Key.TAB, "00"))
  await sleep(1000)
  await driver.findElements(By.css("._43rl")).then( async el => await el[1].click())
}
;(async function inicio() {
  try { 
    console.clear()
   
   await login()
   for(x=1;x=>config.dias;x++){
   await abrir_post()
   await criar_post(x)
   await programar_data_hora()
   await sleep(6000)
   }
  } finally {
    // await driver.quit()
  }
})();