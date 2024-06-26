import { Router } from "express"
import userController from "./user.controller.js"
import testController from "./test.controller.js"
import retestController from "./retest.controller.js"
import testResultController from "./test-result.controller.js"

const router = Router()

router.route("/").get(userController.apiGetUsers)

router.route("/test").get(testController.apiGetTests)
router.route("/test").post(testController.apiCreateTest)

router.route("/retest").get(retestController.apiGetRetests)
router.route("/retest").post(retestController.apiRetestRequest)

router.route("/result").get(testResultController.apiGetTestResults)
router.route("/result").post(testResultController.apiPostTestResult)

export default router
