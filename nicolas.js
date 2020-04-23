// Use Manual for JS Libraries

// ##I IMPORT
// #EXTERNAL FILE : simple all import
//  import * as nicolas from './nicolas.js' 
//  then in the EXTERNAL FILE : nicolas.foo or nicolas.bar
// #single import
//  import nicolas from './nicolas'
// #default import (can put any name for imported element)
//  import foo from './nicolas'
// #default import + simple all import
//  import foo from './nicolas'
//  import * as fabien from './nicolas'
// ou encore
//  import foo, * as fabien from './nicolas'


// ##II EXPORT
// #constants
// default value
// export default "pronomdefault"
// ou alors 
//  const lpp = a => a.toUpperCase()
//  export default lpp

// nominative value
// export const nicolas="samikaero"
// or
//  const nicolas="samikaero"
//  export nicolas



// #functions, first modern ES6 variant
// export const lpp = a => a.toUpperCase()
// then legacy JS with returned value
// export function upp (a) {return (a.toUpperCase())}
// without returned value
// export function magique () {
//     const mon = 5
//     const lan = 7
//     console.log(`monxlan = ${mon*lan}`)
// }


// ##III TRANSPORT (export something imported)
// export something from 'someModule.js'
// export default from 'someModuleWithDefault.js'



// Function to extract emails from webpages


// # REGEX object
const Regex = {}
// function to escape all problematic characters from a Regex, when i can put the name as RegExp.escape,
// and export it as : export const RegExp to check if merging into RegExp standard object works
Regex.escape = function(s) {
    return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
};
// function to test if user input is correct, to prevent server crashing errors and malicious attacks
// To test, just one rule : ENCLOSE REGEX IN ^ AND $, as in /^whatEntireInputShouldLookLike$/

// example 1 to test molecule input as in : Fe3C5H6O5
const formule = "Fe3C5H6O5"
Regex.molecule = /^(([A-Z]{1}[a-z]*)\d*)*$/
// if (!regexMolecule.test(formule)) return "incorrect input"

// example 2 to test web links
const webLink = "https://www.obama.com"
Regex.web = /^(?:http(?:s)?:\/\/)?(?:www.)?(\w+)+((?:.com)|(?:.org)|(?:.net))((?:\/\w+)*)(?:\/)?$/
// if (!regexWeb.test(webLink)) return "incorrect input"
// the regexHref also captures A/the domain name B/ the domain extension C/ the full path





export {Regex}