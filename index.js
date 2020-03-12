'use strict'

const createClient = require('hafas-client')
const pkpProfile = require('hafas-client/p/pkp')

const createPkpHafas = (userAgent, opt = {}) => {
	return createClient(pkpProfile, userAgent, opt)
}

module.exports = createPkpHafas
