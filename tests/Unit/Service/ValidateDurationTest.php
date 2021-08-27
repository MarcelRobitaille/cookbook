<?php

namespace OCA\Cookbook\tests\Unit\Service;

use OCA\Cookbook\Db\RecipeDb;
use OCA\Cookbook\Service\RecipeService;
use OCP\IConfig;
use OCP\IL10N;
use OCP\Files\IRootFolder;
use PHPUnit\Framework\TestCase;
use ReflectionClass;
use ReflectionMethod;

/**
 * Class ValidateDurationTest tests the validateDuration method of the recipe service.
 *
 * @package OCA\Cookbook\Tests\Unit\Service
 */
class ValidateDurationTest extends TestCase {
	/**
	 * @var RecipeService
	 */
	private $recipeService;
	/**
	 * @var ReflectionMethod
	 */
	private $reflectedValidateDurationMethod;

	public function setUp(): void {
		$this->recipeService = new RecipeService(
			'admin',
			$this->getMockBuilder(IRootFolder::class)->disableOriginalConstructor()->getMock(),
			$this->getMockBuilder(RecipeDb::class)->disableOriginalConstructor()->getMock(),
			$this->getMockBuilder(IConfig::class)->disableOriginalConstructor()->getMock(),
			$this->getMockBuilder(IL10N::class)->disableOriginalConstructor()->getMock()
		);
		$reflectedRecipeService = new ReflectionClass(RecipeService::class);
		//$this->reflectedValidateDurationMethod = $reflectedRecipeService->getMethod('validateDuration');
		//$this->reflectedValidateDurationMethod->setAccessible(true);
	}

	/**
	 * @dataProvider intervalProvider
	 *
	 * @param string $interval
	 * @param bool $expectedResult
	 */
	/*public function testValidateCorrectTimeInterval(string $interval, bool $expectedResult)
	{
		if ($expectedResult) {
			$this->assertTrue($this->reflectedValidateDurationMethod->invoke($this->recipeService, $interval));
		} else {
			$this->assertFalse($this->reflectedValidateDurationMethod->invoke($this->recipeService, $interval));
		}
	}*/

	/**
	 * @return array
	 */
	public function intervalProvider(): array {
		return [
			['P2Y4DT6H8M', true],
			['P2IY4DT6H8M', false],
		];
	}
}
