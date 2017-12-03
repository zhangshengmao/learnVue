/*
Navicat MySQL Data Transfer

Source Server         : qingsongdian
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : qingsongdian

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-29 14:03:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `acceptorder`
-- ----------------------------
DROP TABLE IF EXISTS `acceptorder`;
CREATE TABLE `acceptorder` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `foodname` varchar(255) DEFAULT NULL,
  `tablenumber` int(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  `flavor` varchar(255) DEFAULT NULL,
  `cooktime` varchar(255) DEFAULT NULL,
  `chargeback` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `totalPrice` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `ok` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=87 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of acceptorder
-- ----------------------------
